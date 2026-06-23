import React from 'react';
import './counter.css';
 function CounterSection() {
            const [counts, setCounts] = React.useState({
                members: 0,
                chapters: 0,
                events: 0
            });
            const [hasAnimated, setHasAnimated] = React.useState(false);
            const sectionRef = React.useRef(null);

            React.useEffect(() => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting && !hasAnimated) {
                            setHasAnimated(true);
                        }
                    },
                    {
                        root: null,
                        rootMargin: '0px',
                        threshold: 0.3 // Trigger when 30% of section is visible
                    }
                );

                const currentRef = sectionRef.current;
                if (currentRef) {
                    observer.observe(currentRef);
                }

                return () => {
                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                };
            }, [hasAnimated]);

            React.useEffect(() => {
                if (!hasAnimated) return;

                const targetCounts = {
                    members: 1156,
                    chapters: 34,
                    events: 100
                };
                const duration = 2000; // Animation duration in ms
                const steps = 60; // Number of animation steps
                const increment = {
                    members: targetCounts.members / steps,
                    chapters: targetCounts.chapters / steps,
                    events: targetCounts.events / steps
                };

                let currentStep = 0;
                const interval = setInterval(() => {
                    currentStep++;
                    setCounts(prev => ({
                        members: (Math.round(prev.members + increment.members), targetCounts.members),
                        chapters: Math.min(Math.round(prev.chapters + increment.chapters), targetCounts.chapters),
                        events: Math.min(Math.round(prev.events + increment.events), targetCounts.events)
                    }));

                    if (currentStep >= steps) {
                        clearInterval(interval);
                    }
                }, duration / steps);

                return () => clearInterval(interval);
            }, [hasAnimated]);

            return (
              <div ref={sectionRef} className="counter-section">
                    <div className="container">
                        <div className="counter-grid">
                        <div className="counter-card">
                            <div className="circle-number">{counts.members.toLocaleString()}+</div>
                            <p className="counter-label">Members</p>
                        </div>
                        <div className="counter-card">
                            <div className="circle-number">{counts.chapters.toLocaleString()}</div>
                            <p className="counter-label">Chapters</p>
                        </div>
                        <div className="counter-card">
                            <div className="circle-number">{counts.events.toLocaleString()}+</div>
                            <p className="counter-label">Events</p>
                        </div>
                        </div>
                    </div>
                    </div>


            );
        }
export default CounterSection;