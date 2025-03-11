
import { useState, useEffect, useRef } from "react";
import { Send, MessageSquare } from "lucide-react";

interface Comment {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Load comments from localStorage if available
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      try {
        const parsedComments = JSON.parse(savedComments);
        // Convert string timestamps back to Date objects
        const formattedComments = parsedComments.map((comment: any) => ({
          ...comment,
          timestamp: new Date(comment.timestamp)
        }));
        setComments(formattedComments);
      } catch (e) {
        console.error("Error parsing saved comments:", e);
      }
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim() === "" || message.trim() === "") return;
    
    const newComment: Comment = {
      id: Date.now(),
      name,
      message,
      timestamp: new Date()
    };
    
    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <section 
      id="comments" 
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">Leave a Note</div>
        <h2 className="section-title mb-12">Comments</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Comment Form */}
          <div className="card-glass">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <MessageSquare size={20} />
              <span>Share your thoughts</span>
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 min-h-[120px]"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary w-full"
              >
                <Send size={18} />
                <span>Submit</span>
              </button>
            </form>
          </div>
          
          {/* Comments List */}
          <div>
            <h3 className="text-xl font-medium mb-6">Recent comments</h3>
            
            {comments.length === 0 ? (
              <div className="card-glass text-center p-8">
                <p className="text-gray-500">No comments yet. Be the first to leave a message!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {comments.map((comment) => (
                  <div key={comment.id} className="comment-item">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{comment.name}</h4>
                      <span className="text-xs text-gray-500">{formatDate(comment.timestamp)}</span>
                    </div>
                    
                    <div className="max-h-[150px] overflow-y-auto pr-2 text-gray-700">
                      {comment.message}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
