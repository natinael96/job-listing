import { getServerSession } from "next-auth";
import { Options } from '../../../auth';
import UserProfile from './UserProfile';

const Header = async () => {
  const session = await getServerSession(Options);
  // console.log(session);
  return <UserProfile session={session} />;
};

export default Header;
