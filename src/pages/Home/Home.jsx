import { Fragment } from "react";
import Loader from "../../component/shared/Loader/Loader";
import { useGetCasinoThumbnail } from "../../hooks/casino";
import { Carousel } from "../../component/modules/Home/Carousel";
import { SliderThumbnail } from "../../component/modules/Home/SliderThumbnail";

const Home = () => {
  const { data, isLoading } = useGetCasinoThumbnail({ id: "home" });

  const top_picks = data?.top_picks;
  const casinos_choice = data?.casinos_choice;
  const top_games = data?.top_games;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <Carousel />

      <div data-v-1dbbb793 data-v-2e21701c className="home-lobby-container">
        <SliderThumbnail data={top_picks} title="Top Picks for you" />
        {/* <RecentlyPlayed /> */}
        <SliderThumbnail data={casinos_choice} title="Casino's Choice" />
        <SliderThumbnail data={top_games} title="Top Games" />
      </div>
    </Fragment>
  );
};

export default Home;
