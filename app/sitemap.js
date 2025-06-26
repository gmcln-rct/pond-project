import { services } from './data/services';
import { successStories } from './data/success-stories';

export default function sitemap() {
    const baseUrl = process.env.BASE_URL || 'https://littlebearenv.com';
    
    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/success`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/certifications`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/labels`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/about/littlebear`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.2,
      },
      {
        url: `${baseUrl}/about/site`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.2,
      }
    ];

    // Generate service pages
    const servicePages = services.map((service) => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

    // Generate success story pages
    const successPages = successStories.map((story) => ({
      url: `${baseUrl}/success/${story.id}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    }));

    return [...staticPages, ...servicePages, ...successPages];
  }