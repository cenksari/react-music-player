// interfaces
interface IProps {
  image: string;
  children: React.ReactNode;
}

const Cover: React.FC<IProps> = ({ image, children }) => (
  <>
    <div
      style={{
        backgroundImage: `url('${image}')`,
      }}
      className='cover'
    />
    {children}
  </>
);

export default Cover;
