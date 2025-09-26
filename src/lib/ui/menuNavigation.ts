export type GetButtons = () => HTMLButtonElement[];
export type SetSelectedIndex = (index: number) => void;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function focusAt(buttons: HTMLButtonElement[], index: number): void {
  if (buttons.length === 0) return;
  const clamped = clamp(index, 0, buttons.length - 1);
  const target = buttons[clamped];
  if (target) target.focus();
}

// Build a live buttons getter from refs accessors
export function makeGetButtons(...getters: Array<() => HTMLButtonElement | null>): GetButtons {
  return () => getters.map((g) => g()).filter(Boolean) as HTMLButtonElement[];
}

// Public helper to focus at index using a GetButtons provider
export function focusAtIndex(getButtons: GetButtons, index: number): void {
  const buttons = getButtons();
  focusAt(buttons, index);
}

export function handleMenuKeydownFactory(
  getButtons: GetButtons,
  setSelectedIndex: SetSelectedIndex
): (event: KeyboardEvent) => void {
  return function handleMenuKeydown(event: KeyboardEvent): void {
    const buttons = getButtons();
    const activeIndex = buttons.findIndex((b) => b === document.activeElement);

    switch (event.key) {
      case 'ArrowDown':
      case 'j': {
        event.preventDefault();
        const next = activeIndex === -1 ? 0 : activeIndex + 1;
        const clamped = clamp(next, 0, buttons.length - 1);
        setSelectedIndex(clamped);
        focusAt(buttons, clamped);
        break;
      }
      case 'ArrowUp':
      case 'k': {
        event.preventDefault();
        const prev = activeIndex === -1 ? 0 : activeIndex - 1;
        const clamped = clamp(prev, 0, buttons.length - 1);
        setSelectedIndex(clamped);
        focusAt(buttons, clamped);
        break;
      }
      case 'Home': {
        event.preventDefault();
        setSelectedIndex(0);
        focusAt(buttons, 0);
        break;
      }
      case 'End': {
        event.preventDefault();
        const last = Math.max(0, buttons.length - 1);
        setSelectedIndex(last);
        focusAt(buttons, last);
        break;
      }
      case 'Enter':
      case ' ': {
        if (document.activeElement instanceof HTMLButtonElement) {
          event.preventDefault();
          document.activeElement.click();
        }
        break;
      }
    }
  };
}
