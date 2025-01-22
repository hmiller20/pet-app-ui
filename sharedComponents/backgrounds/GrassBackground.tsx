export function GrassBackground() {
    return (
      <div className="absolute bottom-0 left-0 right-0">
        {/* Main grass layer */}
        <div className="h-[min(96px,12vh)] bg-green-500 relative">
          {/* Dotted texture overlay */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="h-[min(12px,1.5vh)] flex justify-around"
                style={{
                  transform: `translateX(${i % 2 ? 'min(10px,1.25vw)' : '0'})`
                }}
              >
                {[...Array(20)].map((_, j) => (
                  <div 
                    key={j}
                    className="w-[min(4px,0.5vw)] h-[min(4px,0.5vw)] bg-black rounded-full"
                  />
                ))}
              </div>
            ))}
          </div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-600/10" />
        </div>
      </div>
    );
  }