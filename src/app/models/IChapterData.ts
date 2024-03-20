export interface IChapterData {
  title: string;
  element: HTMLElement;
  animationStartCallback: () => void;
  componentResetCallback: () => void;
  actionLeftCallback: () => void;
  actionRightCallback: () => void;
}
