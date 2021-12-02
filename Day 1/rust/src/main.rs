use std::fs::read_to_string;

fn main() {
    let tokens = read_to_string("./input.txt").unwrap();
    let contents_split: Vec<&str> = tokens.split("\r\n").collect();

    let mut count: usize = 0;
    let mut last = i32::max_value();

    for i in contents_split.iter() {
        let num = i.parse::<i32>().unwrap();

        if num > last {
            count += 1;
        }

        last = num;
    }

    println!("Total count: {:?}", count)
}
