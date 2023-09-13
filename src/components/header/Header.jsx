import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 pb-1 mb-10'>
            <h1 className='text-3xl font-bold'>Knowlwdge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;