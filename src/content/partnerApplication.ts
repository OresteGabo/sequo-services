export type PartnerKind = 'VENDOR' | 'RIDER' | 'HUB'
export type ApplicationDraft = { displayName:string; email:string; phoneNumber:string; businessName:string; city:string; neighborhood:string; landmark:string; latitude:string; longitude:string; vehicleType:string }
export const emptyApplication = (): ApplicationDraft => ({displayName:'',email:'',phoneNumber:'',businessName:'',city:'',neighborhood:'',landmark:'',latitude:'',longitude:'',vehicleType:''})
export function applicationPayload(kind:PartnerKind,d:ApplicationDraft,acknowledged:boolean,key:string) {
  if(!acknowledged)throw Error('acknowledgement')
  if(!d.displayName.trim()||!d.city.trim()||!d.neighborhood.trim()||(kind!=='RIDER'&&!d.businessName.trim()))throw Error('required')
  if(!d.email.trim()&&!d.phoneNumber.trim())throw Error('contact')
  if(d.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()))throw Error('email')
  if(d.phoneNumber.trim()&&!/^\+[1-9][0-9]{7,14}$/.test(d.phoneNumber.trim().replace(/[ -]/g,'')))throw Error('phone')
  if(kind==='RIDER'&&!['Moto','Bicycle','Car','Van'].includes(d.vehicleType))throw Error('vehicle')
  const latitude=d.latitude.trim()?Number(d.latitude):null,longitude=d.longitude.trim()?Number(d.longitude):null
  if((latitude===null)!==(longitude===null)||(latitude!==null&&(!Number.isFinite(latitude)||latitude < -90||latitude > 90))||(longitude!==null&&(!Number.isFinite(longitude)||longitude < -180||longitude > 180)))throw Error('coordinates')
  return {kind,acknowledged:true,idempotencyKey:key,details:{displayName:d.displayName.trim(),email:d.email.trim()||null,phoneNumber:d.phoneNumber.trim()||null,businessName:kind==='RIDER'?null:d.businessName.trim(),city:d.city.trim(),neighborhood:d.neighborhood.trim(),landmark:d.landmark.trim()||null,latitude,longitude,vehicleType:kind==='RIDER'?d.vehicleType:null}}
}
