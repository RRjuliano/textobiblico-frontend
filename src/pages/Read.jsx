import { useFetchSearchByIdQuery } from '../redux/services/searchsApi';
import { useFetchCapterByIdQuery } from '../redux/services/captersApi';
import { useFetchBibliaByIdQuery } from '../redux/services/bibliasApi';
import { useParams, useNavigate } from "react-router";
import { IoSearch } from 'react-icons/io5';

const Read = () => {

    const params = useParams();
    const navigate = useNavigate()
    const { data: txts, isLoadingtxts, isErrortxts } = useFetchSearchByIdQuery(params.id) //'6764723ce11050dc0945fe71'
    const cod = txts?.value.response[params.i].cod
    const vers = cod?.match(/\d+_\d+_\d+/)
    const interval = cod?.match(/-\d+-d+$/)
    console.log(interval?'temos intervalo':'nao tem intervalo')
    console.log(vers?'temos verso unico':'nao tem verso unico')
    const { data: biblia, isLoadingbiblia, isErrorbiblia } = useFetchBibliaByIdQuery(cod?.match(/\d+_\d+/)[0]);
    const { data: capter, isLoadingcapter, isErrorcapter } = useFetchCapterByIdQuery(biblia?.value.cod);
    
    return (
        <>
            {txts?.value.response.length > params.i && (
                <div className='justify-center items-center h-screen '>
                    <div className="max-w-2xl mx-auto my-10 p-8 bg-stone-100 shadow-xl">
                        <h1 className="font-serif text-xl text-center md:text-4xl text-zinc-800 mb-4">{capter?.value.name}</h1>
                            <p className="font-serif font-medium text-gray-800 leading-relaxed text-justify">
                                {biblia?.value.value}
                            </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Read;
