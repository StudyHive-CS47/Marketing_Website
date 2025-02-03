import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';

const StyledWrapper = styled.div`
  .container {
    padding: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .chart-container {
    width: 100%;
    height: 400px;
    margin: 2rem auto;
    position: relative;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .legend {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    text-align: left;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    font-size: 0.9rem;
  }

  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
  }
`;

const SurveyResults = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Productivity', 'Deadline Management', 'Academic Performance', 'Feature Usage'],
          datasets: [
            {
              label: 'Before StudyHive',
              data: [70, 30, 80, 40],
              backgroundColor: 'rgba(239, 68, 68, 0.7)', // red
              borderColor: 'rgba(239, 68, 68, 1)',
              borderWidth: 1
            },
            {
              label: 'With StudyHive',
              data: [100, 80, 100, 90],
              backgroundColor: 'rgba(59, 130, 246, 0.7)', // blue
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: false,
              grid: {
                display: false,
                color: 'rgba(255, 255, 255, 0.1)'
              },
              ticks: {
                color: '#fff'
              }
            },
            y: {
              stacked: false,
              beginAtZero: true,
              max: 100,
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              },
              ticks: {
                color: '#fff',
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: '#fff',
                font: {
                  size: 12
                },
                padding: 20
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: '#fff',
              bodyColor: '#fff',
              padding: 12,
              displayColors: true,
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': ' + context.raw + '%';
                }
              }
            }
          },
          animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
          }
        }
      });
    }
  }, []);

  const legendItems = [
    {
      label: 'Productivity: 30% increase in efficiency',
      color: 'rgba(59, 130, 246, 0.7)'
    },
    {
      label: 'Deadline Management: 50% reduction in missed deadlines',
      color: 'rgba(59, 130, 246, 0.7)'
    },
    {
      label: 'Academic Performance: 20% improvement',
      color: 'rgba(59, 130, 246, 0.7)'
    },
    {
      label: 'Feature Usage: 65% keyword search, 50% group chat, 60% note sharing',
      color: 'rgba(59, 130, 246, 0.7)'
    }
  ];

  return (
    <StyledWrapper>
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 mb-6 text-center">
          Impact Analysis
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4 leading-relaxed text-center">
          Our comprehensive analysis reveals significant improvements in student productivity, deadline management, and academic performance after implementing StudyHive.
        </p>
        <div className="chart-container">
          <canvas ref={chartRef} />
        </div>
        <div className="legend">
          {legendItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="legend-item"
            >
              <div className="legend-color" style={{ backgroundColor: item.color }} />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SurveyResults; 