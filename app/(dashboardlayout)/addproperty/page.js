import React from 'react';
import Tabswrapper from '@/components/addproperty/tabs/Tabswrapper';
import Propertyapi from '@/components/api/Propertyapi';
// import { useUserDetails } from '@/components/zustand/useUserDetails';
// import { useRouter } from 'next/navigation';

async function Page() {
    // const router = useRouter();
    // const isLogged = useUserDetails((state) => state.isLogged);

    // useEffect(() => {
    //     if (!isLogged) {
    //         router.push('/signup');
    //     }
    // }, [isLogged]);

    // if (!isLogged) {
    //     return null; // Or a loading spinner, placeholder, etc.
    // }

    const getPropertyInData = await getPropertyIn();
    if (getPropertyInData.status === 'error') {
        return (
            <div>
                <p>Error fetching propertyIn types</p>
            </div>
        );
    }
    const propertyInList = getPropertyInData.propertyInList;

    const getPropertyForData = await getPropertyFor();
    if (getPropertyForData.status === 'error') {
        return (
            <div>
                <p>Error fetching propertyFor types</p>
            </div>
        );
    }
    const propertyForList = getPropertyForData.propertyForList;

    const getTransactionTypeData = await getTransactionType();
    if (getTransactionTypeData.status === 'error') {
        return (
            <div>
                <p>Error fetching transaction types</p>
            </div>
        );
    }
    const transactionTypeList = getTransactionTypeData.transactionTypeList;

    const getPreferedTenantTypesData = await getPreferedTenantTypes();
    if (getPreferedTenantTypesData.status === 'error') {
        return (
            <div>
                <p>Error fetching prefered tenant types</p>
            </div>
        );
    }
    const preferedTenantList = getPreferedTenantTypesData.preferedTenantList;

    const getbacloniesData = await getbaclonies();
    if (getbacloniesData.status === 'error') {
        return (
            <div>
                <p>Error fetching baclonies</p>
            </div>
        );
    }
    const bacloniesList = getbacloniesData.bacloniesList;

    const getBedroomTypesData = await getBedroomTypes();
    if (getBedroomTypesData.status === 'error') {
        return (
            <div>
                <p>Error fetching bedroom types</p>
            </div>
        );
    }
    const bedroomtypesList = getBedroomTypesData.bedroomtypesList;

    const getBusinessTypesData = await getBusinessTypes();
    if (getBusinessTypesData.status === 'error') {
        return (
            <div>
                <p>Error fetching business types</p>
            </div>
        );
    }
    const businesstypesList = getBusinessTypesData.businesstypesList;

    const getFacingData = await getFacing();
    if (getFacingData.status === 'error') {
        return (
            <div>
                <p>Error fetching facing types</p>
            </div>
        );
    }
    const facingList = getFacingData.facingList;

    return (
        <div className='px-[80px] mt-5'>
            <div className='p-1 border border-[#699BA0] rounded-md'>
                <Tabswrapper
                    propertyInList={propertyInList}
                    propertyForList={propertyForList}
                    transactionTypeList={transactionTypeList}
                    preferedTenantList={preferedTenantList}
                    bacloniesList={bacloniesList}
                    bedroomtypesList={bedroomtypesList}
                    businesstypesList={businesstypesList}
                    facingList={facingList}
                />
            </div>
        </div>
    );
}

export default Page;

async function getPropertyIn() {
    try {
        const response = await Propertyapi.get('/getPropertyIn');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching propertyIn types',
                propertyInList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'propertyIn types fetched successfully',
            propertyInList: data.property_in,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching propertyIn types:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching propertyIn types',
            propertyInList: [],
        }
        return finaldata;
    }
}

async function getPropertyFor() {
    try {
        const response = await Propertyapi.get('/getPropertyFor');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching propertyFor types',
                propertyForList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'propertyFor types fetched successfully',
            propertyForList: data.property_for,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching propertyFor types:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching propertyFor types',
            propertyForList: [],
        }
        return finaldata;
    }
}

async function getTransactionType() {
    try {
        const response = await Propertyapi.get('/getTransactionType');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching transaction types',
                transactionTypeList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'transaction types fetched successfully',
            transactionTypeList: data.transaction_type,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching transaction types:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching transaction types',
            transactionTypeList: [],
        }
        return finaldata;
    }
}

async function getPreferedTenantTypes() {
    try {
        const response = await Propertyapi.get('/getpreferedtenanttypes');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching prefered tenant types',
                preferedTenantList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'prefered tenant types fetched successfully',
            preferedTenantList: data.prefered_tenant_types,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching prefered tenant types:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching prefered tenant types',
            preferedTenantList: [],
        }
        return finaldata;
    }
}

async function getbaclonies() {
    try {
        const response = await Propertyapi.get('/getbaclonies');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching baclonies',
                bacloniesList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'baclonies fetched successfully',
            bacloniesList: data.balconies,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching baclonies:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching baclonies',
            bacloniesList: [],
        }
        return finaldata;
    }
}

async function getBedroomTypes() {
    try {
        const response = await Propertyapi.get('/getbedroomtypes');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching bedroom types',
                bedroomtypesList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'bedroom types fetched successfully',
            bedroomtypesList: data.bedrooms,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching bedroom types:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching bedroom types',
            bedroomtypesList: [],
        }
        return finaldata;
    }
}

async function getBusinessTypes() {
    try {
        const response = await Propertyapi.get('/getbusinesstypes');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching business types',
                businesstypesList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'business types fetched successfully',
            businesstypesList: data.business_types,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching business types:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching business types',
            businesstypesList: [],
        }
        return finaldata;
    }
}

async function getFacing() {
    try {
        const response = await Propertyapi.get('/getfacing');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching facing types',
                facingList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'facing types fetched successfully',
            facingList: data.facing,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching facing types:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching facing types',
            facingList: [],
        }
        return finaldata;
    }
}

async function getFurnishedTypes() {
    try {
        const response = await Propertyapi.get('/getFurnishedStatus');
        const data = response.data;
        if (data.status === 'error') {
            let data = {
                status: 'error',
                message: 'Error fetching furnished types',
                furnishedtypesList: [],
            }
            return data;
        }
        let finaldata = {
            status: 'success',
            message: 'furnished types fetched successfully',
            furnishedtypesList: data.furnished_status,
        }
        return finaldata;
    } catch (error) {
        console.error('Error fetching furnished types:', error);
        let finaldata = {
            status: 'error',
            message: 'Error fetching furnished types',
            furnishedtypesList: [],
        }
        return finaldata;
    }
}