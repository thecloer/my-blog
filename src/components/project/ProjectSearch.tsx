const ProjectSearch = () => {
  return (
    <div className='flex justify-center'>
      <input type='text' placeholder='Search....' className='outline-none border-2 rounded-full px-5 py-2 w-1/3' />
      <button className='bg-slate-300 px-4 py-1 rounded-full text-sm -translate-x-3/4'>Search</button>
    </div>
  );
};

export default ProjectSearch;
