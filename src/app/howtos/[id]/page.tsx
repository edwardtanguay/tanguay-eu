import rawHowtos from '../../../data/itemtype_howtos.json';
import HowtoSearch from '@/components/HowtoSearch';

export async function generateMetadata({ params }: { params: { id: string } }) {
   const { id } = params;
   return {
      title: `Howto #${id} is showing on this page`
   }
}

export default async function Page({ params }: { params: { id: string } }) {
   const { id } = params;
   const howto = rawHowtos.find(m => String(m.id) === id);

   return (
      <div>
         {howto && (
            <div className='mb-3'>{howto.title}</div>
         )}
         <HowtoSearch />
      </div>
   )
}