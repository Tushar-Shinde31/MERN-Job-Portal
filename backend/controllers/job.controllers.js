import{ Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            experience,
            position,
            companyId
        } = req.body;

        const userId = req.id; // coming from auth middleware

        if (
            !title || !description || !requirements || !salary ||
            !location || !jobType || !experience || !position || !companyId
        ) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const job = await Job.create({
            title,
            description,
            requirements: Array.isArray(requirements)
                ? requirements
                : requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,      // ✅ should match your schema
            created_by: userId       // ✅ should match your schema
        });

        return res.status(201).json({
            message: "Job posted successfully",
            job
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export const getJobs = async (req, res) => {
    try{
        const keyword = req.query.keyword || ""; //search keyword
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                // { requirements: { $regex: keyword, $options: "i" } },
                // { location: { $regex: keyword, $options: "i" } },
                // { jobType: { $regex: keyword, $options: "i" } },
                // { experienceLevel: { $regex: keyword, $options: "i" } },
                // { position: { $regex: keyword, $options: "i" } }
            ]
        };
        const jobs = await Job.find(query).populate({
            path: "company",
        }).sort({ createdAt: -1 }); //sort by latest job first
        if(!jobs) {
            return res.status(404).json({ message: "No jobs found" });
        }
        return res.status(200).json({ message: "Jobs fetched successfully", jobs });

    } catch (error) {
        console.log (error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getJobById = async (req, res) => {
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        return res.status(200).json({ message: "Job found", job });

    }catch (error) {
        console.log (error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

//admin kitne job create kra abhi tk
export const getAdminJobs = async (req, res) => {
    try{
        const adminId = req.id; //logged in user id
        const jobs = await Job.find({created_by: adminId});
        if(!jobs) {
            return res.status(404).json({ message: "No jobs found" });
        }
        return res.status(200).json({ message: "Jobs fetched successfully", jobs });
    } catch (error) {
        console.log (error);
        return res.status(500).json({ message: "Internal server error" });
    }
}