import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
//Material components
import Box from '@material-ui/core/Box/Box';
//Api resource
import UseFetch from '../../Hooks/UseFetch';
import ApiUrl from '../../Services/ApiUrl';
import TokenApiUrl from '../../Services/TokenApiUrl';
import FormatApiUrl from '../../Services/FormatApiUrl';
//App components
import Loading from '../../Components/Loading/Loading';
import Header from '../../Components/Header/Header';
import SingleCharacter from '../../Components/SingleCharacter/SingleCharacter';
import Footer from '../../Components/Footer/Footer';

const Character = () => {
  const { id } = useParams()
  const { data, loading } = UseFetch(`${ApiUrl}/character/${id}/${TokenApiUrl}${FormatApiUrl}`);

  if (loading)
    return <Loading />

  return (
    <Fragment>
      <Box className="main">
        <Header />
          <SingleCharacter data={data} />
        <Footer />
      </Box>
    </Fragment>
  );
}
export default Character;