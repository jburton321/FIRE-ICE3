export interface IFrameProps {
  className?: string;
}

export const Frame = ({ className, ...props }: IFrameProps): JSX.Element => {
  return (
    <div className={"h-[7550.73px] relative overflow-hidden " + className}>
      <img
        className="h-[auto] absolute left-0 top-0 overflow-visible"
        src="clip-path-group0.svg"
      />
    </div>
  );
};
