import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    // const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                } else {
                    console.error("Failed to fetch jobs:", res.data.message);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error.response?.data?.message || error.message);
            }
        }
        fetchAllJobs();
    },[])
}

export default useGetAllJobs;