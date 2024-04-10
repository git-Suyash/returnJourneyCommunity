import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PostCard from "../components/postcard";
import ProfileButton from "../components/profilebutton";
import Carousel from "../components/carousel";

function HomePage() {
    return(
        <div className="home-page">
        <Navbar />
        <Carousel />
      <ProfileButton />
      <div style={{display : "flexbox"}}><PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Footer />
      </div>
    );
}

export default HomePage;