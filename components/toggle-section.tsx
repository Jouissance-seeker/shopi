import { ReactNode, RefObject, useRef } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { useOnClickOutside } from 'usehooks-ts';
import { cn } from '@/utils/cn';

interface IToggleSectionProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  isShow: boolean;
  isBackDrop?: boolean;
  className?: string;
}

export function ToggleSection(props: IToggleSectionProps) {
  // close tooltip when clicking outside
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(sectionRef as RefObject<HTMLElement>, () => {
    props.onClose();
  });

  return (
    <div>
      {/* backdrop */}
      <div
        className={cn('fixed inset-0', {
          show: props.isShow,
          hide: !props.isShow,
          'backdrop-blur-sm bg-black/10': props.isBackDrop,
        })}
      />
      {/* section */}
      <div
        ref={sectionRef}
        className={cn('transition-all', props.className, {
          show: props.isShow,
          hide: !props.isShow,
        })}
      >
        <div className="container">
          <div className="rounded-md border border-gray-200 bg-white">
            {/* head */}
            <div className="flex items-center justify-between border-b p-2">
              <p className="text-smp font-bold text-gray-700">{props.title}</p>
              <button
                onClick={props.onClose}
                className="flex-center size-6 overflow-hidden rounded-md bg-red"
              >
                <HiMiniXMark size={20} className="fill-white" />
              </button>
            </div>
            {/* body */}
            <div className="p-2 text-smp">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
