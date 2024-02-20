export interface IChapterData {
  title: string;
  element: HTMLElement;
  animationStartCallback: () => void;
  componentResetCallback: () => void;
  keypressLeftCallback: () => void;
  keypressRightCallback: () => void;
}
