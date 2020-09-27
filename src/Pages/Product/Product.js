import React from 'react';
import { useParams } from 'react-router-dom';
//Api resource
import UseFetch from '../../Hooks/UseFetch';
import ApiUrl from '../../Services/ApiUrl';
import TokenApiUrl from '../../Services/TokenApiUrl';
import FormatApiUrl from '../../Services/FormatApiUrl';
//App components
import Loading from '../../Components/Loading/Loading';
import SingleComic from '../../Components/SingleComic/SingleComic';

const Product = () => {
  const { id } = useParams()
  const { data, loading } = UseFetch(`${ApiUrl}/issue/${id}/${TokenApiUrl}${FormatApiUrl}`);

  if ( loading )
    return <Loading />

    return <SingleComic data={data} />
}

export default Product;