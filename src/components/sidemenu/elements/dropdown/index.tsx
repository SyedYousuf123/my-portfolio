import { clsx } from 'clsx';
import { useCallback, useEffect, useRef } from 'react';

export * from './contents';

type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
    triggerRef: React.RefObject<HTMLButtonElement | null>;
    isDropdownOpen: boolean;
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Dropdown = ({ triggerRef, isDropdownOpen, setIsDropdownOpen, children, ...rest }: DropdownProps) => {

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleClickInsideDropdown = useCallback((e: MouseEvent): void => {
        const dropdown = dropdownRef.current;
        const target = e.target as HTMLElement;
        if (dropdown && isDropdownOpen) {
            const li = dropdown.closest('li') as HTMLElement;
            if (li.contains(target) && target.tagName === 'DIV') return;
        }
        setIsDropdownOpen(false);
        return;
    }, [isDropdownOpen, setIsDropdownOpen])

    const handleKeydown = useCallback((e: KeyboardEvent) => {
        const trigger = triggerRef.current;
        const dropdown = dropdownRef.current;
        const key = e.key;
        if (trigger && dropdown && isDropdownOpen) {
            if (key === 'Escape') {
                trigger.focus();
                setIsDropdownOpen(false);
            }
            if (key === 'Enter' || key === ' ') {
                e.preventDefault();
                trigger.focus();
                setIsDropdownOpen(false);
            }
            if (key === 'Home' || key === 'End' || key === 'ArrowUp' || key === 'ArrowLeft' || key === 'ArrowDown' || key === 'ArrowRight') {
                e.preventDefault();
                const items = Array.from(dropdown.querySelectorAll<HTMLElement>('button'));
                if (items.length === 0) return;
                const active: HTMLElement | null = document.activeElement as HTMLElement | null;
                const currentIndex: number = active ? items.indexOf(active) : -1;
                let nextIndex: number = currentIndex;
                if (key === 'Home') nextIndex = 0;
                if (key === 'End') nextIndex = items.length - 1;
                if (key === 'ArrowUp' && currentIndex > 0) nextIndex = currentIndex - 1;
                if (key === 'ArrowLeft' && currentIndex > 0) nextIndex = currentIndex - 1;
                if (key === 'ArrowDown' && currentIndex < items.length - 1) nextIndex = currentIndex + 1;
                if (key === 'ArrowRight' && currentIndex < items.length - 1) nextIndex = currentIndex + 1;
                if ((key === 'ArrowUp' || key === 'ArrowLeft') && currentIndex === -1) nextIndex = 0;
                items[nextIndex].focus();
            }
            return;
        }
        return;
    }, [isDropdownOpen, setIsDropdownOpen, triggerRef])

    useEffect(() => {
        const trigger = triggerRef.current;
        const dropdown = dropdownRef.current;
        if (trigger && dropdown) {
            trigger.addEventListener('keydown', handleKeydown);
            dropdown.addEventListener('keydown', handleKeydown);
            document.addEventListener('click', handleClickInsideDropdown);
            return () => {
                trigger.removeEventListener('keydown', handleKeydown);
                dropdown.removeEventListener('keydown', handleKeydown);
                document.removeEventListener('click', handleClickInsideDropdown);
            }
        }
    }, [handleClickInsideDropdown, handleKeydown, triggerRef])

    return (
        <div
            ref={dropdownRef}
            className={clsx(
                'overflow-hidden',
                'absolute top-0 bottom-auto right-36',
                'insm:top-auto insm:bottom-0 insm:right-[135px]',
                'w-[155px] insm:w-[135px] rounded',
                'dark:bg-light bg-dark',
                'transform-gpu origin-top-right insm:origin-bottom-right',
                'transition-transform duration-333 ease-out',
                isDropdownOpen
                    ? 'pointer-events-auto visible scale-100'
                    : 'pointer-events-none invisible scale-0',
            )}
            {...rest}
        >
            {children}
        </div>
    )

}