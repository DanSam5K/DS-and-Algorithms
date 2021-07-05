def reverse(n, p)
  p.odd? ? (p-n)/2 : (p+1-n)/2
end

def pageCount(n, p)
  # Write your code here
  p/2 >= reverse(p,n) ? reverse(p,n) : p/2

end
    
