import './App.css'
import Header from './components/Header'
import Product from './components/Product'
const App = () => {
  return(
    <>
    <Header/>
    <Product image={"https://th.bing.com/th/id/R.9dc37c17dc2106f858a01d6dccbbfc96?rik=NFIUX2vKK1rRPw&riu=http%3a%2f%2finformationng.com%2fwp-content%2fuploads%2f2014%2f03%2fbrain-study.jpg&ehk=appCMWTeZ3ClGQq%2bRg%2b9cyfIlaPVir5OEQBHGJmkVSo%3d&risl=&pid=ImgRaw&r=0"} name={"High IQ Brain"} category={"Biology"} size={"100*100cm"} color={"Pink"} weight={"200g"} sp_inst={"Need a doctor"} price={100000} />
    <Product image={"https://th.bing.com/th/id/R.74b7ce76224cbf44e01e16c0e49c0504?rik=JJpLFD48Jyv6wA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-7_yB2hNRDzo%2fTxK-mgnBLTI%2fAAAAAAAABVc%2fo0mh4GPsf_0%2fs1600%2fWindows%2b-7-valentines-day-wallpaper-Background.jpg&ehk=3oGYaQU3ea3OSOhc8G5mJkcl3C4%2bXK5lPGjhDVsyDQA%3d&risl=&pid=ImgRaw&r=0"} name={"Maya pirati"} category={"Sports"} size={"Infinite"} color={"rangbirangi"} weight={"More than ur sense of humour"} sp_inst={"Handle with care"} price={120000} />
    <Product image={"https://www.bhphotovideo.com/images/images2000x2000/Canon_5169B018AA_EOS_Rebel_T3i_Digital_753762.jpg"} name={"Camera"} category={"Electronics"} size={"100*20cm"} color={"Black"} weight={"1Kg"} sp_inst={"Handle with care"} price={60000} />

    </>
  )
}

export default App