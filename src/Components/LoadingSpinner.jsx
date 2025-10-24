import { useSpring, animated } from "@react-spring/web";

const LoadingSpinner = () => {
  const props = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 1000 },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <animated.div
        style={{
          ...props,
          width: 50,
          height: 50,
          borderRadius: "50%",
          border: "5px solid #ccc",
          borderTop: "5px solid #3498db",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
