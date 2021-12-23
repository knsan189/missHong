import PropTypes from "prop-types";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import Main from "../src/components/main/Main";
import FestivalService from "./api/FestivalService";

export default function Home({ festivals }) {
  return (
    <>
      <Header />
      <main>
        <Main festivals={festivals} />
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await FestivalService.getThisMonthFestival(
      20211212,
      1,
      "B"
    );
    return {
      props: {
        festivals: response,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

Home.propTypes = {
  festivals: PropTypes.instanceOf(Object).isRequired,
};
