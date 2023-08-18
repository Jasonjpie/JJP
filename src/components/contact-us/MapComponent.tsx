import { Marker, Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import Container from '../common/Container'
import { FaLocationDot } from 'react-icons/fa6'
import { Icon } from 'leaflet'
type Props = {}

const MapComponent = (props: Props) => {
  const customIcon = new Icon({
    iconUrl:'/Icons/map-location.svg',
    iconSize:[50, 50]
  })
  return (
    <Container>
      <div className='w-full h-[100vh]'>
            <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={true} attributionControl={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]} icon={customIcon}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
    </Container>
    
   
  )
}

export default MapComponent