import { setAllJobs } from '@/redux/jobSlice'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'

const useGetAllCompanies = (companyId) => {
    const dispatch = useDispatch();
    // const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                } else {
                    console.error("Failed to fetch jobs:", res.data.message);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error.response?.data?.message || error.message);
            }
        }
        fetchSingleCompany();
    },[])
}

export default useGetAllCompanies;


