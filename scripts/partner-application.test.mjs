import test from 'node:test'
import assert from 'node:assert/strict'
import { emptyApplication, applicationPayload } from '../src/content/partnerApplication.ts'
const draft=()=>({...emptyApplication(),displayName:'Applicant',phoneNumber:'+22890123456',city:'Lomé',neighborhood:'Tokoin',vehicleType:'Moto'})
test('the public form requires acknowledgement and reachable contact details',()=>{
 assert.throws(()=>applicationPayload('RIDER',draft(),false,'saved-key'))
 assert.throws(()=>applicationPayload('RIDER',{...draft(),phoneNumber:''},true,'saved-key'))
 assert.throws(()=>applicationPayload('RIDER',{...draft(),phoneNumber:'123'},true,'saved-key'))
})
test('applications never include staff authority or employment classification',()=>{
 const data=applicationPayload('RIDER',{...draft(),roleCode:'SUPER_ADMIN',workforceType:'SequoSalaried'},true,'saved-key')
 assert.equal(data.kind,'RIDER');assert.equal(data.idempotencyKey,'saved-key');assert.equal(data.acknowledged,true)
 assert.equal('roleCode' in data.details,false);assert.equal('workforceType' in data.details,false);assert.equal('userId' in data,false)
})
test('shop coordinates are optional for applicant review and invalid pairs are rejected',()=>{
 const d={...draft(),businessName:'Shop'}
 assert.equal(applicationPayload('HUB',d,true,'saved-key').details.latitude,null)
 assert.throws(()=>applicationPayload('HUB',{...d,latitude:'6.1'},true,'saved-key'))
 assert.throws(()=>applicationPayload('HUB',{...d,latitude:'91',longitude:'1.2'},true,'saved-key'))
 assert.equal(applicationPayload('HUB',{...d,latitude:'6.1',longitude:'1.2'},true,'saved-key').details.longitude,1.2)
})
