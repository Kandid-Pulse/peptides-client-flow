// Manor — Brand configuration
// Edit this file to update brand colors and fonts across all pages.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        olive: { dark:'#2d3a21', mid:'#3d4f2e', DEFAULT:'#4a5c38', light:'#6b7c58', pale:'#8a9878' },
        terra: { dark:'#6d4530', DEFAULT:'#8b5a3c', light:'#a67055' },
        cream: { dark:'#ede7da', DEFAULT:'#f5f0e8', white:'#faf9f6', mid:'#e8e0d0' },
        muted: '#7a8a6a',
        status: { green:'#3a6020', amber:'#7a5010', red:'#902820' },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif'],
      },
    }
  }
}
