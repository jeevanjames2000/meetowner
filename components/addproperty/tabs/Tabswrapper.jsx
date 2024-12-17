import React, { Suspense } from 'react'
import Tabssubwrapper from './Tabssubwrapper'

function Tabswrapper({
    propertyInList, 
    propertyForList, 
    transactionTypeList,
    preferedTenantList, 
    bacloniesList, 
    bedroomtypesList,
    businesstypesList, 
    facingList, 
    furnishedtypesList,
    occupancyList, 
    ownershipList, zoneList
}) {
  return (
    <Suspense>
      <Tabssubwrapper 
        propertyInList={propertyInList}
        propertyForList={propertyForList}
        transactionTypeList={transactionTypeList}
        preferedTenantList={preferedTenantList}
        bacloniesList={bacloniesList}
        bedroomtypesList={bedroomtypesList}
        businesstypesList={businesstypesList}
        facingList={facingList}
        furnishedtypesList={furnishedtypesList}
        occupancyList={occupancyList}
        ownershipList={ownershipList}
        zoneList={zoneList}
      />
    </Suspense>
  )
}

export default Tabswrapper
