import loading from '../assets/mush-4.gif'

const IsLoading = () => {
  return (
    <div className='flex-center flex-col md:flex-row gap-3'>
      <img className='w-48' src={loading}/>
      <p className='text-2xl'>The content is loading</p>
      <span className='text-2xl animate-pulse'>. . .</span>
    </div>
  )
}

export default IsLoading