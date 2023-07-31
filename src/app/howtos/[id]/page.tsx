import rawHowtos from '../../../data/itemtype_howtos.json';
import * as qdat from '../../../qtools/qdat';


export async function generateMetadata({ params }: { params: { id: string } }) {
   const { id } = params;
   const title = `Howto #${id} is showing on this page`;
   return {
      title,
      openGraph: {
         title,
         description: 'This will be data from the body of the Howto.'
      }
   }
}

export default async function Page({ params }: { params: { id: string } }) {
   const { id } = params;
   const howto = rawHowtos.find(m => String(m.id) === id);

   return (
      <>
         {howto && (
            <>
               <div className='border-slate-500 bg-gray-950 border p-3 mt-6'>
                  <div className="text-yellow-400 smallcaps text-md text-opacity-70">
                     {qdat.smartDateWithYear(howto.systemWhenCreated)} -{' '}
                     <span dangerouslySetInnerHTML={{ __html: howto.category }}></span>
                  </div>
                  <div className='text-2xl'>{howto.title}</div>
               </div>
               <div className='bg-slate-900 p-3 border border-slate-500'>
                  BODY
               </div>
            </>
         )}
      </>
   )
}