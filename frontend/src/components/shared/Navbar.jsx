import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../ui/popover';
import { Button } from '../ui/button';
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  };

  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-tight">
            Next<span className="text-[#6A38C2]">Hired</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {user?.role === 'recruiter' ? (
              <>
                <li>
                  <Link to="/admin/companies" className="hover:text-[#6A38C2] transition">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs" className="hover:text-[#6A38C2] transition">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" className="hover:text-[#6A38C2] transition">Home</Link>
                </li>
                <li>
                  <Link to="/jobs" className="hover:text-[#6A38C2] transition">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse" className="hover:text-[#6A38C2] transition">Browse</Link>
                </li>
              </>
            )}
          </ul>

          {/* Auth Actions */}
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" className="text-sm px-4 py-2">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white text-sm px-4 py-2">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-[#6A38C2] hover:ring-offset-2 transition">
                  <AvatarImage
                    src={user?.profile?.profilePhoto || ''}
                    alt="User"
                  />
                  <AvatarFallback>{user?.fullname?.[0] || 'U'}</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 shadow-md rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="user" />
                    <AvatarFallback>{user?.fullname?.[0] || 'U'}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio || 'No bio available'}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {user.role === 'student' && (
                    <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                      <Link to="/profile" className="flex items-center gap-2">
                        <User2 size={16} />
                        View Profile
                      </Link>
                    </Button>
                  )}
                  <Button
                    onClick={logoutHandler}
                    variant="ghost"
                    className="w-full justify-start text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
