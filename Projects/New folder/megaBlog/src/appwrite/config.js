import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectID)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    //post related methods

    async createPost({ title, slug, content,
        featuredImage, status, userId }) {
        try {
            return await this.databases.createRow(
                conf.appwriteDatabaseID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("APPwrite service ::createPost::error", error);

        }
    }

    async updatePost(slug, { title, content, featuredImage,
        status }) {
        try {
            return await this.databases.updateRow(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite service:: updatePost ::error", error);

        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteRow(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("APPwrite service ::deletePost::error", error);
            return false;
        }
    }

    async getPostsByUser(slug) {
        try {
            return await this.databases.getRow(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("APPwrite service ::getPostsByUser::error", error);
        }
        return false;


    }

    async getAllPosts(quires = [Query.equal(
        'status', 'active'
    )]) {
        try {
            return await this.databases.listRows(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                quires,

            )
        } catch (error) {
            console.log("APPwrite service ::getAllPosts::error", error);
        }
    }

    // file upload method


    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketID,
                fileId: ID.unique(),
                file
            })
        } catch (error) {
            console.log("APPwrite service ::uploadFile::error", error);
            return false;
        }


    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketID,
                fileId
            })
            return true;
        } catch (error) {
            console.log("APPwrite service ::deleteFile::error", error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview({
                bucketId: conf.appwriteBucketID,
                fileId
            })
        } catch (error) {
            console.log("APPwrite service ::getFilePreview::error", error);
            return false;
        }
    }



}


const service = new Service()
export default service