import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Image, Tooltip } from "@chakra-ui/react";
import SearchingElements from "../Components/Skeleton/SearchElement/SearchingElements";
import { InfiniteScrolling, PlayVideoByUsingID } from "../Redux/Video/action";
import { useNavigate } from "react-router-dom";
import { GETDATA, PLAYVIDEO, TAKEVIDEOID } from "../Redux/Video/action.type";

const Searching = () => {
  const { data, page, query, loading, error } = useSelector(
    (store) => store.data
  );
  const dispatch = useDispatch();
  const id = useRef(null);
  const navigate = useNavigate();

  //   useEffect(()=>{
  //    dispatch(GetData({page}))
  //   },[]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(id.current);
    };
  }, [dispatch, page]);

  const handleClick = (el) => {
    // dispatch(PLAYVIDEO(index));
    dispatch(PlayVideoByUsingID(el.id.videoId));
    navigate("/Video");
  };
  function handleScroll() {
    let { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    // console.log(clientHeight,scrollHeight,scrollTop)

    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      if (id.current) {
        clearTimeout(id.current);
      }
      id.current = setTimeout(() => {
        if (data.length) {
          dispatch(InfiniteScrolling({ page, query }));
        }
      }, [300]);
    }
  }

  if (loading) {
    return <>{<SearchingElements />}</>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Grid
      p="0.5rem"
      mt="3rem"
      gridTemplateColumns={{
        base: "repeat(2,1fr)",
        sm: "repeat(3,1fr)",
        md: "repeat(5,1fr)",
      }}
      gap="2rem"
    >
      {data &&
        data.length !== 0 &&
        data.map((el, i) => (
          <Tooltip
            position="absolute"
            label="Play Video"
            placement="top"
            openDelay={300}
          >
            <Box
              key={i}
              width="100%"
              height="100%"
              boxShadow="0px 0px 10px 2px white"
              borderRadius="6px"
              overflow="hidden"
              onClick={() => handleClick(el)}
              cursor="pointer"
            >
              {console.log(el)}
              <Image
                loading="lazy"
                width="100%"
                height="100%"
                src={el.snippet.thumbnails.medium.url}
                alt={el.snippet.title}
              />
            </Box>
          </Tooltip>
        ))}
    </Grid>
  );
};

export default Searching;
