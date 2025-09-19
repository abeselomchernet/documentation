/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  useTextBufferForTest,
  useTestHarnessForAtCompletion,
  useTestHarnessForSlashCompletion,
} from './hooks.js';
import type { UseAtCompletionProps } from '../hooks/useAtCompletion.js';
import { useAtCompletion } from '../hooks/useAtCompletion.js';
import type { UseSlashCompletionProps } from '../hooks/useSlashCompletion.js';
import { useSlashCompletion } from '../hooks/useSlashCompletion.js';
import { useEffect } from 'react';

// Mock the inner hooks that the harnesses wrap
vi.mock('../hooks/useAtCompletion.js');
vi.mock('../hooks/useSlashCompletion.js');

const mockedUseAtCompletion = useAtCompletion as vi.Mock;
const mockedUseSlashCompletion = useSlashCompletion as vi.Mock;

describe('Test Harness Hooks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('useTextBufferForTest', () => {
    it('should create a text buffer with initial text and default cursor', () => {
      const { result } = renderHook(() => useTextBufferForTest('hello'));

      expect(result.current.text).toBe('hello');
      expect(result.current.cursor).toEqual([0, 5]);
    });

    it('should create a text buffer with a specified cursor offset', () => {
      const { result } = renderHook(() => useTextBufferForTest('hello', 2));

      expect(result.current.text).toBe('hello');
      expect(result.current.cursor).toEqual([0, 2]);
    });
  });

  describe('useTestHarnessForAtCompletion', () => {
    it('should capture and return state from useAtCompletion', () => {
      // This mock simulates the behavior of the real useAtCompletion hook
      // by calling the state setters passed to it by the harness.
      mockedUseAtCompletion.mockImplementation(
        ({ setSuggestions, setIsLoadingSuggestions }: UseAtCompletionProps) => {
          useEffect(() => {
            act(() => {
              setIsLoadingSuggestions(true);
              setSuggestions([{ label: 'file.txt', value: 'file.txt' }]);
              setIsLoadingSuggestions(false);
            });
          }, [setSuggestions, setIsLoadingSuggestions]);
        },
      );

      const { result } = renderHook(() =>
        useTestHarnessForAtCompletion({
          enabled: true,
          pattern: 'file',
          config: undefined,
          cwd: '/',
        }),
      );

      // The harness should correctly reflect the state set by the mocked hook.
      expect(result.current.isLoadingSuggestions).toBe(false);
      expect(result.current.suggestions).toEqual([
        { label: 'file.txt', value: 'file.txt' },
      ]);
    });

    it('should initialize with empty/false state', () => {
      mockedUseAtCompletion.mockImplementation(() => {
        // Do nothing initially
      });

      const { result } = renderHook(() =>
        useTestHarnessForAtCompletion({
          enabled: true,
          pattern: '',
          config: undefined,
          cwd: '/',
        }),
      );

      expect(result.current.isLoadingSuggestions).toBe(false);
      expect(result.current.suggestions).toEqual([]);
    });
  });

  describe('useTestHarnessForSlashCompletion', () => {
    it('should capture and return state from useSlashCompletion', () => {
      // This mock simulates the behavior of the real useSlashCompletion hook.
      mockedUseSlashCompletion.mockImplementation(
        ({
          setSuggestions,
          setIsLoadingSuggestions,
          setIsPerfectMatch,
        }: UseSlashCompletionProps) => {
          useEffect(() => {
            act(() => {
              setIsLoadingSuggestions(true);
              setSuggestions([{ label: '/help', value: 'help' }]);
              setIsPerfectMatch(true);
              setIsLoadingSuggestions(false);
            });
          }, [setSuggestions, setIsLoadingSuggestions, setIsPerfectMatch]);

          // The harness should also pass through the return value of the hook.
          return { completionStart: 1, completionEnd: 5 };
        },
      );

      const { result } = renderHook(() =>
        useTestHarnessForSlashCompletion({
          enabled: true,
          query: '/help',
          slashCommands: [],
          commandContext: {} as any,
        }),
      );

      expect(result.current.isLoadingSuggestions).toBe(false);
      expect(result.current.isPerfectMatch).toBe(true);
      expect(result.current.suggestions).toEqual([
        { label: '/help', value: 'help' },
      ]);
      expect(result.current.completionStart).toBe(1);
      expect(result.current.completionEnd).toBe(5);
    });
  });
});