export interface IChapterData {
  title: string;
  element: HTMLElement;
  animationStartCallback: () => void;
  animationLeaveCallback: () => void;
}
