interface PetCardProps {
    id: string;
    name: string;
    color: string;
    onSelect: (petType: string) => void;
  }
  
  export function PetCard({ id, name, color, onSelect }: PetCardProps) {
    return (
      <button
        onClick={() => onSelect(id)}
        className="group relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-2xl overflow-hidden"
      >
        <div className="aspect-square mb-6">
          <div className={`w-full h-full rounded-3xl ${color} transition-transform duration-300 group-hover:-translate-y-2`} />
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          {name}
        </h2>
      </button>
    );
  }