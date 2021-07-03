def anagram(s)
  # Write your code here
  if s.size.odd?
    return -1
  end
  a = s.slice(0...s.size/2)
  b = s.slice(s.size/2...s.size).split('')
    a.each_char do |val1|
      b.each_with_index do |val2, idx|
        if val1 == val2
          b.delete_at(idx)
          break
        end
      end
    end
    return b.size
end