import { React} from 'react'
import getPhotoUrl from 'get-photo-url'
import  {db} from '../dexieData'
import { useLiveQuery } from 'dexie-react-hooks'


const Gallery = () => {

      const allPhotos= useLiveQuery(()=> db.gallery.toArray(), [])

      const addPhoto = async () => {
        db.gallery.add({
          url: await getPhotoUrl('#addPhotoInput'),
        })
      }
      const removePhoto = (id) => {
        db.gallery.delete(id)
      }

      const clearPhoto = (id) => {
        db.gallery.clear(id)
      }


  return (
      <div>
        <input type='file' name='photo' id='addPhotoInput'  />
        <label htmlFor='addPhotoInput' onClick={addPhoto} className="addImages">
            <i className='add-photo-button fas fa-plus-square'></i>    
        </label>

        <section className='gallery'>
          {!allPhotos &&  <div className="loader"></div> }
          {allPhotos?.map ((photo) => (
            <div className='item' key={photo.id}>
              <img src={photo.url} className='item-image' alt=''/>
              <button className='delete-button' onClick={() => removePhoto(photo.id)}>Delete</button>
            </div>
          ))}
        </section>
        <button className='clear-button' onClick={() => clearPhoto(allPhotos)}>Delete All</button>
      </div>
  )
}

export default Gallery