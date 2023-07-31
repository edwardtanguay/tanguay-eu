import * as appModel from '../../../appModel';
import * as qdat from '../../../qtools/qdat';
import '../../outline.scss';

export async function generateMetadata({ params }: { params: { id: string } }) {
   const { id } = params;
   const howto = appModel.howtos.find(m => String(m.id) === id);
   const title = howto === undefined ? 'UNKNOWN' : `HOWTO: ${howto.title}`;
   return {
      title,
      openGraph: {
         title,
         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel accusantium officia voluptatum labore quis earum molestiae porro tenetur harum repellendus magni omnis suscipit temporibus eius, nisi voluptatibus! Quaerat, saepe! Quae ducimus perspiciatis voluptatibus non totam cumque, animi quia ipsam, ullam labore voluptates hic aliquid, minus quo repudiandae eos placeat velit soluta mollitia quas cum unde sed. Praesentium, voluptatibus facere?  Maxime optio ducimus accusamus quam suscipit ex impedit tempora aliquid numquam obcaecati quidem, tenetur minus, officiis, commodi rerum? Pariatur quam molestiae possimus laboriosam, et odit? Ab possimus ipsum voluptas deserunt!  Culpa nesciunt, sed recusandae sint accusamus non quam assumenda, consequuntur quisquam adipisci ipsa quae dolores architecto iure delectus perferendis alias distinctio ad quidem in dignissimos voluptate suscipit. Aliquam, cumque praesentium. The end.`,
         images: ['https://tanguay-eu.vercel.app/images/siteIcon.png']
      }
   }
}

export default async function Page({ params }: { params: { id: string } }) {
   const { id } = params;
   const howto = appModel.howtos.find(m => String(m.id) === id);

   return (
      <>
         {howto && (
            <>
               <div className='border-slate-600 bg-gray-950 border p-5 mt-6'>
                  <div className="text-yellow-400 smallcaps text-md text-opacity-70">
                     {qdat.smartDateWithYear(howto.systemWhenCreated)} -{' '}
                     <span dangerouslySetInnerHTML={{ __html: howto.category }}></span>
                  </div>
                  <div className='text-2xl'>{howto.title}</div>
               </div>
               <div className='bg-slate-900 p-3 border-r border-b border-l border-slate-600'>
                  <div dangerouslySetInnerHTML={{ __html: howto.bodyHtml }}></div>
               </div>
            </>
         )}
      </>
   )
}