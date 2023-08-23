# frozen_string_literal: true

class ResourceConnection

  attr_reader :closed
  attr_writer :closed

  def open
    @closed = nil
  end

  def execute()

  end

  def close
    @closed = Time.now
    puts 'conn closed'
  end


end

