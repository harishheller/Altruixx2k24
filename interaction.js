// Select all testimonial columns
const testimonialCols = document.querySelectorAll('.testimonials-col');

// Add hover interaction to each column
testimonialCols.forEach(col => {
  col.addEventListener('mouseover', () => {
    col.style.transform = 'scale(1.1)';
    col.style.transition = 'transform 0.3s ease-in-out';
  });
  
  col.addEventListener('mouseout', () => {
    col.style.transform = 'scale(1)';
  });
});
