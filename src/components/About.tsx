import { Card, CardContent } from "./ui/card";
import { Brain, Database, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With 5+ years of experience in data science and machine learning, I specialize in 
            building end-to-end ML solutions that deliver measurable business impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I hold a Master's degree in Data Science from FAST NUCES and have worked 
              with companies ranging from startups to International enterprises. My passion lies 
              in uncovering patterns in complex datasets and translating findings into actionable 
              business strategies.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When I'm not analyzing data, you can find me contributing to open-source projects, 
              writing technical blog posts, or exploring the latest advances in AI research.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">R</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">SQL</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">PyTorch</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">AWS</span>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Brain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Deep Learning/Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert in supervised/unsupervised learning, deep learning, 
                    and model deployment at scale.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Database className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Data Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Building robust data pipelines, ETL processes, 
                    and cloud infrastructure for ML workflows.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Analytics & Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Transforming raw data into compelling visualizations 
                    and actionable business intelligence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}