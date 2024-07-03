# Portfolio website - Hosting in Amazon s3

![Alt text](https://private-user-images.githubusercontent.com/143833326/339408948-bfa4c4a1-f270-4774-b199-7b5f909d87f2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwMTI2MTAsIm5iZiI6MTcyMDAxMjMxMCwicGF0aCI6Ii8xNDM4MzMzMjYvMzM5NDA4OTQ4LWJmYTRjNGExLWYyNzAtNDc3NC1iMTk5LTdiNWY5MDlkODdmMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwM1QxMzExNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MDkzZTlhOTgwYmFiMGY3ZmQ0YjA0MzYxOTBlMmMwMWIzZTgzMjY0OWVmYzEyYzgyMTczZjU5OGY0OTk1ODhjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5oOp36U5_7U65CfhUxXEBz36EIrJ_5aPMLj31xpXWNI)

# What is Amazon S3?
#### Amazon S3 (Simple Storage Service) is an object storage service provided by Amazon Web Services (AWS). It is designed to store and retrieve any amount of data from anywhere on the web.

# Benefits of S3
1. Scalability: S3 scales storage resources based on demand, allowing users to store a virtually unlimited amount of data.

2. Durability and Availability: S3 is designed for 99.999999999% (11 9's) of durability and 99.99% availability of objects over a given year.

3. Security: S3 provides robust security features such as access management, encryption (both in transit and at rest), and integration with AWS Identity and Access Management (IAM).

4. Cost-Effective: It offers flexible pricing models, including pay-as-you-go, tiered storage classes for cost optimization, and lifecycle policies for automatic data transition to cheaper storage tiers.

5. Data Management Features: S3 supports versioning, cross-region replication, data lifecycle management, and event notifications.

6. Integration: S3 integrates with many AWS services and third-party tools, making it versatile for various use cases such as backups, content distribution, big data analytics, and machine learning.

7. Performance: S3 provides high throughput and low-latency access to stored data, which is beneficial for performance-critical applications.

# Deploying a static website
There are several ways to host your website:
 - Using the S3 console
 - Using the AWS software development kit
- Using the AWS command line interface

-> We will use the S3 console to deploy and host a website in this project. Here's a step-by-step guide:

# Step 1: Set Up an S3 Bucket

1. Log in to AWS Management Console: Go to the AWS Management Console.

2. Navigate to S3: From the Services menu, select S3.

3. Create a Bucket:

- Click on "Create bucket."
- Enter a unique bucket name (e.g., resumebucket254).
- Choose a region.
- Click "Create bucket" after reviewing the settings.

# Step 2: Upload Your Website Files

1. Open Your Bucket: Click on the bucket name you just created.

2. Upload Files: using the AWS CLI to upload your file from your terminal. (E.g aws s3 sync <folder name> s3://<name of the bucket>)

# Step 3: Configure the Bucket for Static Website Hosting

1. Enable Static Website Hosting:

    i. In the bucket properties, select the "Properties" tab.

    ii. Scroll down to the "Static website hosting" section.

    iii. Choose "Use this bucket to host a website."

    iv. Enter the name of your index document (e.g., index.html).

    v. Optionally, enter the name of an error document (e.g., error.html).

    vi. Click "Save."

# Step 4: Set Permissions

-> Make the Bucket Public:

    i. Go to the "Permissions" tab in your bucket.

    ii. Click on "Bucket Policy."

    iii. Add a bucket policy to allow public read access

    {
    "Version": "2012-10-17",
    "Statement": [
            {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<your bucket name>/*"
            }
        ]
    }

    iv. Replace <your bucket name> with your actual bucket name.

    v. Click "Save."

# Step 5:  Access Your Website

-> Get the Endpoint URL:

    > Go to the "Properties" tab.

    > In the "Static website hosting" section, note the "Endpoint" URL.

    >This is the URL where your static website can be accessed (e.g., http://<your bucket name>.s3-website-us-east-1.amazonaws.com).