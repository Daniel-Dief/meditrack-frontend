import { Settings, User, Calendar, History } from 'lucide-react';
import Button from '../../components/Button';

export default function Navbar() {
  return (
    <nav className="bg-white w-full border-b border-border shadow-sm border-b-gray-200">
        <div className="flex justify-between px-10 items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary text-[#88acad]">MediTrack</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button color="secondary" size="sm" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Calendário</span>
            </Button>
            
            <Button color="secondary" size="sm" className="flex items-center space-x-2">
              <History className="h-4 w-4" />
              <span>Histórico</span>
            </Button>
            
            <Button color="secondary" size="sm" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Config</span>
            </Button>
            
            <Button color="secondary" size="sm" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Usuário</span>
            </Button>
          </div>
      </div>
    </nav>
  );
};