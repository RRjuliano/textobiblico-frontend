import { useFetchSearchByIdQuery } from '../redux/services/searchsApi';
import { useNavigate, useParams } from "react-router";
import { MdShare } from "react-icons/md";
import { CgEreader } from "react-icons/cg";
import { TbCopy } from "react-icons/tb";
import { IoSearch } from 'react-icons/io5';

const Result = () => {

  const navigate = useNavigate()
  const { id } = useParams();
  const { data: txtbiblicos, isLoading, isError } = useFetchSearchByIdQuery(id) //'6764723ce11050dc0945fe71'

  async function clipb(content) {
    navigator.clipboard.writeText(content)
      .then(() => { console.log("Text copied to clipboard...") })
      .catch(err => { console.log('Something went wrong', err) })
  }

  const share = async (text) => {
    const shareData = {
      title: "TextoBiblico",
      text: text
    }
    try {
      await navigator.share(shareData);
      console.log("Shared successfully")
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  const all = () => {
    let content = []
    txtbiblicos?.value.response.map((item) => {
      content.push(item?.text + "\n" + item?.ref)
    })
    return content.join('\n\n')
  }

  return (
    <>
      {txtbiblicos?.value.response.length > 0 && (
        <div className='flow-root text-lg'>
          <div className="flex flex-wrap flex-row items-center justify-end gap-3 
                          px-4 py-2 ml-4 mb-12 md:justify-between md:flex-row md:gap-6
                          md:bg-violet-300 text-gray-800 rounded-md">
            {txtbiblicos?.value.response.length > 1 && (
              <div className='flex gap-3'>
                <p className="text-inherit text-xl font-light text-gray-900">{txtbiblicos?.value.response.length} Resultados.</p>
                <button
                  onClick={() => { clipb(all()) }}
                  type="button" className="flex flex-row items-center gap-1 font-medium text-inherit text-green-600 hover:text-green-700">
                  <TbCopy /> Copiar
                </button>
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => { share("textobiblico.vercel.app/r/" + txtbiblicos?.value._id) }}
                type="button" className="flex flex-row items-center gap-1 font-medium text-inherit text-green-600 hover:text-green-700">
                <MdShare /> Enviar link
              </button>
              <button
                onClick={() => navigate("/search")}
                type="button" className="flex flex-row items-center gap-1 font-medium text-inherit text-green-600 hover:text-green-700">
                <IoSearch /> Nova Pesquisa
              </button>
            </div>
          </div>
          <ul role="list" className="-my-6 divide-y divide-gray-200 sm:mx-4">
            {txtbiblicos?.value.response.map((item, i) => (
              <li key={item?.cod} className="flex py-6">
                <div className="ml-4 flex flex-1 flex-col">

                  <p className="font-medium text-gray-900">{item?.text}</p>

                  <div className="flex flex-1 flex-wrap items-end justify-between space-y-2">
                    <p className="text-gray-600"> {item?.ref} </p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => { share(item?.text + '\n' + item?.ref) }}
                        type="button" className="flex flex-row items-center gap-1 font-medium text-green-600 hover:text-green-500">
                        <MdShare /> Enviar
                      </button>
                      <a target="_blank" rel="noopener noreferrer">
                        <button
                          onClick={() => navigate(`/rd/${id}/${i}`)}
                          type="button" className="flex flex-row items-center gap-1 font-medium text-green-600 hover:text-green-500">
                          <CgEreader /> Ler
                        </button>
                      </a>
                      <button
                        onClick={() => { clipb(item?.text + '\n' + item?.ref) }}
                        type="button" className="flex flex-row items-center gap-1 font-medium text-green-600 hover:text-green-500">
                        <TbCopy /> Copiar
                      </button>
                    </div>
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div>)
      }
    </>
  )

}

export default Result;
