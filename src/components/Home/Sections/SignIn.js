const SignIn = () => {
  return (
    <section>
      <div className="flex flex-col px-[1rem] py-[0.65rem]">
        <h1 className="text-black text-[1.05rem] text-left font-[600]">
          Sign in for the best experience
        </h1>
        <button className="bg-[#ffd814] p-[0.75rem] font-[1rem] font-[500] my-[0.65rem] text-center rounded-[8px]">
          Sign in securely
        </button>
        <p className="text-[#00798e] font-[500] text-left hover:underline">
          Create an account
        </p>
      </div>
      <div className="w-full bg-[#ccc] h-[2px]"></div>
    </section>
  );
};
export default SignIn;
